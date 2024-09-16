"use client"

import { Card, List, Spinner, Table } from "flowbite-react";
import moment from 'moment';
import 'moment/locale/id';
import 'moment-timezone';
import { useUserControllerFinOneSiswaQuery } from "@/lib/redux/services/api/ApiEiM3Slice";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isError, error, isLoading } = useUserControllerFinOneSiswaQuery({
    id: Number(params.id)
  });
  
  return (
    <>
      {isLoading ?
      <div className="text-center">
        <Spinner size="xl"/>
      </div>
      : isError ? <h1>{`${error}`}</h1>
      : data !== undefined && data.siswa !== null ?
      <>
      <Card>
        <h2 className="text-xl font-semibold">{data.siswa.nama_lengkap}</h2>
        <p className="text-white">kelas: {data.siswa.kelas[0].kelas.nama_kelas}</p>
      </Card>
      </> :
      <h1>User tidak ditemukan</h1>
      }
    </>
  );
}