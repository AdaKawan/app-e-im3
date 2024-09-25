'use client'

import PelajaranDashboard from "@/components/PelajaranDashboard";
import { usePelajaranControllerFindAllQuery, usePelajaranControllerRemoveMutation } from "@/lib/redux/services/api/endpoints/ApiEiM3";
import { Pelajaran } from "@/types/GetAllPelajaran";
import { Button, Modal, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function PelajaranPage() {
  const { data: getAllPelajaran, isLoading: isLoadingAllPelajaran, isError: isErrorAllPelajaran, refetch: refetchPelajaran, isFetching: isRefetchPelajaran } = usePelajaranControllerFindAllQuery();
  const [deletePelajaran] = usePelajaranControllerRemoveMutation(); // Hook untuk delete pelajaran
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPelajaran, setSelectedPelajaran] = useState<Pelajaran | null>(null);
  const router = useRouter();

  useEffect(() => {
    refetchPelajaran();
  }, [refetchPelajaran]);

  if (isLoadingAllPelajaran || isRefetchPelajaran) {
    return <Spinner size="lg" />;
  }

  if (isErrorAllPelajaran) {
    return <div>Error memuat data pelajaran</div>;
  }

  const pelajaranData = getAllPelajaran?.pelajaran || [];

  const handleDeletePelajaran = async () => {
    if (selectedPelajaran) {
      try {
        await deletePelajaran({ id: selectedPelajaran.id }); // Panggil API delete
        refetchPelajaran(); // Refresh data setelah penghapusan
        setIsDeleteModalOpen(false); // Tutup modal
      } catch (error) {
        console.error('Gagal menghapus pelajaran:', error);
      }
    }
  };

  const openDeleteModal = (pelajaran: Pelajaran) => {
    setSelectedPelajaran(pelajaran);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedPelajaran(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Halaman Pelajaran</h1>
        <Button onClick={() => router.push('/guru/pelajaran/create')}>
          Tambah Pelajaran
        </Button>
      </div>

      {/* Dashboard Pelajaran */}
      <PelajaranDashboard
        data={{
          pelajaran: pelajaranData.map((pelajaran: Pelajaran) => ({
            nama_pelajaran: pelajaran.nama_pelajaran,
            jumlah_materi: pelajaran.materi.length,
          })),
        }}
      />

      {/* Modal Konfirmasi Penghapusan */}
      <Modal show={isDeleteModalOpen} onClose={closeDeleteModal}>
        <Modal.Header>Konfirmasi Penghapusan</Modal.Header>
        <Modal.Body>
          <p>Apakah Anda yakin ingin menghapus pelajaran <strong>{selectedPelajaran?.nama_pelajaran}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleDeletePelajaran}>
            Hapus
          </Button>
          <Button color="gray" onClick={closeDeleteModal}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
