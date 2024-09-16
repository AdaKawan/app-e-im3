"use client"

import { Spinner, Table } from "flowbite-react"
import Link from "next/link";
import { useKelasControllerFindAllQuery } from "@/lib/redux/services/api/ApiEiM3Slice"

export default function ListKelasAdminPage () {
    const { data, error, isLoading } = useKelasControllerFindAllQuery();

    if (isLoading) return (
        <div className="text-center">
            <Spinner size="xl"/>
        </div>
    );

    if (error) return <p>Error: {`${error}`}</p>;

    return (
        <>
            <Table>
                <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Nama Kelas</Table.HeadCell>
                <Table.HeadCell>Aksi</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data?.kelas.map((kelas, index) => (
                        <Table.Row key={kelas.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{index+1}</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {kelas.nama_kelas}
                            </Table.Cell>
                            <Table.Cell>
                                <Link href={`kelas/${kelas.id}`} className="font-medium text-yellow-600 dark:text-yellow-300 hover:underline">
                                    Detail
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    )
}