"use client"

import DashboardLayout from "@/components/DashboardLayout";
import withAuth from "@/lib/HOC/withAuth";
import { useKelasControllerFindAllQuery, usePelajaranControllerFindAllQuery, useUserControllerGetAllGuruQuery, useUserControllerGetAllSiswaQuery } from "@/lib/redux/services/api/ApiEiM3Slice";
import { RootState, useAppSelector } from "@/lib/redux/store";
import { Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AdminPage () {
    const user = useSelector((state: RootState) => state.user)
    const { data: getAllGuru, isLoading: loadingAllGuru, isError: isErrorAllGuru, refetch: refetchGuru, isFetching: isRefetchGuru } = useUserControllerGetAllGuruQuery();
    const { data: getAllSiswa, isLoading: loadingAllSiswa, isError: isErrorAllSiswa, refetch: refetchSiswa, isFetching: isRefetchSiswa } = useUserControllerGetAllSiswaQuery();
    const { data: getAllKelas, isLoading: loadingAllKelas, isError: isErrorAllKelas, refetch: refetchKelas, isFetching: isRefetchKelas } = useKelasControllerFindAllQuery();
    const { data: getAllPelajaran, isLoading: loadingAllPelajaran, isError: isErrorAllPelajaran, refetch: refetchPelajaran, isFetching: isRefetchPelajaran } = usePelajaranControllerFindAllQuery();
    
    useEffect(() => {
        refetchGuru();
        refetchSiswa();
        refetchKelas();
        refetchPelajaran();
    }, [refetchGuru, refetchSiswa, refetchKelas, refetchPelajaran]);

    return (
        <>
        {loadingAllGuru || loadingAllSiswa || loadingAllKelas || loadingAllPelajaran || isRefetchGuru || isRefetchSiswa || isRefetchKelas || isRefetchPelajaran ?
        <Spinner size="lg" /> :
        isErrorAllGuru || isErrorAllSiswa || isErrorAllKelas || isErrorAllPelajaran ? 
        <>
        <h1>Ada masalah silahkan refresh halaman</h1>
        </>
        : getAllGuru && getAllSiswa && getAllKelas && getAllPelajaran ?
        <>
        <h1>Selamat Datang {user.nama_lengkap}</h1>
        <DashboardLayout data={{
            jumlahGuru: getAllGuru.guru.length,
            jumlahSiswa: getAllSiswa.siswa.length,
            jumlahKelas: getAllKelas.kelas.length,
            jumlahPelajaran: getAllPelajaran.pelajaran.length,
        }}/>
        </> :
        <>
        <h1>Selamat Datang {user.nama_lengkap}</h1>
        <p>Tidak ada data</p>
        </>
        }
        </>
    )
}