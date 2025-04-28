import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { DatePickeSingleDate } from '../../components/inputs/DatePickerSingleDate';
import OtherDayComponent from '../../components/apod/OtherDayComponent';
import { useApodViewModel } from '../../viewmodels/useApodViewModel';
import SaveDialog from '../../components/dialogs/SaveDialog';
import { useConnectivity } from '../../hooks/useConnectivity';
import NoDataSvg from '../../components/svgs/NoDataSvg';

const SearchImgOtherDays = () => {
  const [visible, setVisible] = React.useState(false);
  const { otherDateApod, offlineApod, loadApodByDate, loadApodOffline, saveCurrentApod } = useApodViewModel();
  const { isConnected } = useConnectivity();

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (!isConnected) loadApodOffline();
  }, [isConnected]);


  const fetchDataOtherDayHandler = async (date: Date | undefined) => {
    if (!date) return;
    loadApodByDate(date);
    // Esperamos 1.5s para ejecutar el dialog para guardar datos
    setTimeout(() => {
      showDialog();
    }, 1500);
  }

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          {/* Cuando esta conectado */}
          <SaveDialog
            visible={visible}
            textDescrip="¿Te gustaria guardar esta consulta?"
            hideDialog={hideDialog}
            showDialog={showDialog}
            onSave={() => {
              console.log("Guardando...");
              saveCurrentApod(otherDateApod.data);
              hideDialog();
            }}
          />

          <DatePickeSingleDate onDateSelected={fetchDataOtherDayHandler} />
          <OtherDayComponent
            data={otherDateApod.data}
            loading={otherDateApod.loading}
            error={otherDateApod.error}
          />
        </>
      ) :
        (
          offlineApod.data ?
            // Cuando no esta conectado
            (<OtherDayComponent
              data={offlineApod.data}
              loading={offlineApod.loading}
              error={offlineApod.error}
              textDescrip='Estas viendo algo offline'
            />)
            :
            // Cuando no esta conectado y no tiene nada guardado en asyncStorage
            (<NoDataSvg description='No tienes ningun dato guardado' />)
        )
      }
    </View>
  )
}

export default SearchImgOtherDays

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
