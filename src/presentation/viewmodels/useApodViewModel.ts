import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useContextHook';
import { clearApod } from '@/store/slices/apodSlice';
import { deleteApod, fetchApod, fetchApodByDate, fetchApodOffline, saveApod } from '@/store/thunks/apodThunks';
import { Apod } from '@/domain/entities/Apod';

export const useApodViewModel = () => {
    const dispatch = useAppDispatch();

    // Acceder al estado de apod
    const todayApod = useAppSelector(state => state.apod.today);
    const otherDateApod = useAppSelector(state => state.apod.otherDate);

    // Acciones encapsuladas
    const loadTodayApod = useCallback(() => {
        dispatch(fetchApod());
    }, [dispatch]);

    const loadApodByDate = useCallback((date: Date) => {
        dispatch(fetchApodByDate(date));
    }, [dispatch]);

    const loadApodOffline = useCallback(() => {
        dispatch(fetchApodOffline());
    }, [dispatch]);

    const saveCurrentApod = useCallback((apod: Apod) => {
        dispatch(saveApod(apod));
    }, [dispatch]);

    const deleteCurrentApod = useCallback(() => {
        dispatch(deleteApod());
    }, [dispatch]);

    const clearApodState = useCallback(() => {
        dispatch(clearApod());
    }, [dispatch]);

    return {
        todayApod,
        otherDateApod,
        loadTodayApod,
        loadApodByDate,
        loadApodOffline,
        saveCurrentApod,
        deleteCurrentApod,
        clearApodState,
    };
};
