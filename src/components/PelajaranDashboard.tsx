import { InfoCardPelajaran } from "./InfoCardPelajaran";

const PelajaranDashboard = ({ data }: { data: { pelajaran: { nama_pelajaran: string; jumlah_materi: number }[] } }) => {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.pelajaran.map((pelajaran, index) => (
          <InfoCardPelajaran
            key={index}
            title={pelajaran.nama_pelajaran}
            count={pelajaran.jumlah_materi}
            onClick={() => console.log(`Pelajaran: ${pelajaran.nama_pelajaran}, Jumlah Materi: ${pelajaran.jumlah_materi}`)}
          />
        ))}
      </div>
    );
  };
  
  export default PelajaranDashboard;