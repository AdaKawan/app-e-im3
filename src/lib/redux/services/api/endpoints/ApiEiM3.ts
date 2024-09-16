import { GetAllGuru } from "@/types/GetAllGuru";
import { ApiEiM3Slice as api } from "../ApiEiM3Slice";
import { GetGuruByID } from "@/types/getGuruById";
import { GetSiswaByID } from "@/types/GetSiswaById";
import { GetAllSiswa } from "@/types/GetAllSiswa";
import { GetMeResponse } from "@/types/GetMeResponse";
import { ApiResponse } from "@/types/ApiResponse";
import { GetAllPelajaran } from "@/types/GetAllPelajaran";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerGetAllGuru: build.query<
      ApiResponse<UserControllerGetAllGuruApiResponse>,
      UserControllerGetAllGuruApiArg
    >({
      query: () => ({ url: `/users/get-all-guru` }),
    }),
    userControllerGetAllSiswa: build.query<
      ApiResponse<UserControllerGetAllSiswaApiResponse>,
      UserControllerGetAllSiswaApiArg
    >({
      query: () => ({ url: `/users/get-all-siswa` }),
    }),
    userControllerCreate: build.mutation<
      UserControllerCreateApiResponse,
      UserControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/create`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    userControllerGetAll: build.query<
      ApiResponse<UserControllerGetAllApiResponse>,
      UserControllerGetAllApiArg
    >({
      query: () => ({ url: `/users/get-all` }),
    }),
    userControllerFinOneGuru: build.query<
      ApiResponse<UserControllerFinOneGuruApiResponse>,
      UserControllerFinOneGuruApiArg
    >({
      query: (queryArg) => ({ url: `/users/find-one-guru/${queryArg.id}` }),
    }),
    userControllerFinOneSiswa: build.query<
      ApiResponse<UserControllerFinOneSiswaApiResponse>,
      UserControllerFinOneSiswaApiArg
    >({
      query: (queryArg) => ({ url: `/users/find-one-siswa/${queryArg.id}` }),
    }),
    userControllerUpdate: build.mutation<
      UserControllerUpdateApiResponse,
      UserControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
      }),
    }),
    userControllerDelete: build.mutation<
      UserControllerDeleteApiResponse,
      UserControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/users/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    kelasControllerCreate: build.mutation<
      KelasControllerCreateApiResponse,
      KelasControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/kelas/create`,
        method: "POST",
        body: queryArg.createKelaDto,
      }),
    }),
    kelasControllerFindAll: build.query<
      ApiResponse<KelasControllerFindAllApiResponse>,
      KelasControllerFindAllApiArg
    >({
      query: () => ({ url: `/kelas/get-all` }),
    }),
    kelasControllerFindOne: build.query<
      ApiResponse<KelasControllerFindOneApiResponse>,
      KelasControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/kelas/get-by-id/${queryArg.id}` }),
    }),
    kelasControllerUpdate: build.mutation<
      KelasControllerUpdateApiResponse,
      KelasControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/kelas/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateKelaDto,
      }),
    }),
    kelasControllerRemove: build.mutation<
      KelasControllerRemoveApiResponse,
      KelasControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/kelas/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    userOnKelasControllerCreate: build.mutation<
      UserOnKelasControllerCreateApiResponse,
      UserOnKelasControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/create`,
        method: "POST",
        body: queryArg.createUserOnKelaDto,
      }),
    }),
    userOnKelasControllerFindAll: build.query<
      ApiResponse<UserOnKelasControllerFindAllApiResponse>,
      UserOnKelasControllerFindAllApiArg
    >({
      query: () => ({ url: `/user-on-kelas/get-all` }),
    }),
    userOnKelasControllerFindOneByUserId: build.query<
      ApiResponse<UserOnKelasControllerFindOneByUserIdApiResponse>,
      UserOnKelasControllerFindOneByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/find-by-user-id/${queryArg.userId}`,
      }),
    }),
    userOnKelasControllerFindOneByKelasId: build.query<
      ApiResponse<UserOnKelasControllerFindOneByKelasIdApiResponse>,
      UserOnKelasControllerFindOneByKelasIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/find-by-kelas-id/${queryArg.kelasId}`,
      }),
    }),
    userOnKelasControllerUpdate: build.mutation<
      UserOnKelasControllerUpdateApiResponse,
      UserOnKelasControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/update`,
        method: "PATCH",
        body: queryArg.updateUserOnKelasDto,
      }),
    }),
    userOnKelasControllerRemove: build.mutation<
      UserOnKelasControllerRemoveApiResponse,
      UserOnKelasControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/delete${queryArg.userId}/${queryArg.kelasId}`,
        method: "DELETE",
      }),
    }),
    pelajaranControllerCreate: build.mutation<
      PelajaranControllerCreateApiResponse,
      PelajaranControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/pelajaran/create`,
        method: "POST",
        body: queryArg.createPelajaranDto,
      }),
    }),
    pelajaranControllerFindAll: build.query<
      ApiResponse<PelajaranControllerFindAllApiResponse>,
      PelajaranControllerFindAllApiArg
    >({
      query: () => ({ url: `/pelajaran/get-all` }),
    }),
    pelajaranControllerFindOne: build.query<
      ApiResponse<PelajaranControllerFindOneApiResponse>,
      PelajaranControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/pelajaran/get-by-id/${queryArg.id}` }),
    }),
    pelajaranControllerUpdate: build.mutation<
      PelajaranControllerUpdateApiResponse,
      PelajaranControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/pelajaran/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePelajaranDto,
      }),
    }),
    pelajaranControllerRemove: build.mutation<
      PelajaranControllerRemoveApiResponse,
      PelajaranControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/pelajaran/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    materiControllerCreate: build.mutation<
      MateriControllerCreateApiResponse,
      MateriControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/materi/create`,
        method: "POST",
        body: queryArg.createMateriDto,
      }),
    }),
    materiControllerFindAll: build.query<
      ApiResponse<MateriControllerFindAllApiResponse>,
      MateriControllerFindAllApiArg
    >({
      query: () => ({ url: `/materi/get-all` }),
    }),
    materiControllerFindOne: build.query<
      ApiResponse<MateriControllerFindOneApiResponse>,
      MateriControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/materi/get-by-id/${queryArg.id}` }),
    }),
    materiControllerUpdate: build.mutation<
      MateriControllerUpdateApiResponse,
      MateriControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/materi/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateMateriDto,
      }),
    }),
    materiControllerRemove: build.mutation<
      MateriControllerRemoveApiResponse,
      MateriControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/materi/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    tugasControllerCreate: build.mutation<
      TugasControllerCreateApiResponse,
      TugasControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/tugas/create`,
        method: "POST",
        body: queryArg.createTugasDto,
      }),
    }),
    tugasControllerFindAll: build.query<
      ApiResponse<TugasControllerFindAllApiResponse>,
      TugasControllerFindAllApiArg
    >({
      query: () => ({ url: `/tugas/get-all` }),
    }),
    tugasControllerFindOne: build.query<
      ApiResponse<TugasControllerFindOneApiResponse>,
      TugasControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/tugas/get-by-id/${queryArg.id}` }),
    }),
    tugasControllerUpdate: build.mutation<
      TugasControllerUpdateApiResponse,
      TugasControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/tugas/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateTugasDto,
      }),
    }),
    tugasControllerRemove: build.mutation<
      TugasControllerRemoveApiResponse,
      TugasControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/tugas/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    pengumpulanControllerCreate: build.mutation<
      PengumpulanControllerCreateApiResponse,
      PengumpulanControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/pengumpulan/create`,
        method: "POST",
        body: queryArg.createPengumpulanDto,
      }),
    }),
    pengumpulanControllerFindAll: build.query<
      ApiResponse<PengumpulanControllerFindAllApiResponse>,
      PengumpulanControllerFindAllApiArg
    >({
      query: () => ({ url: `/pengumpulan/get-all` }),
    }),
    pengumpulanControllerFindOne: build.query<
      ApiResponse<PengumpulanControllerFindOneApiResponse>,
      PengumpulanControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/pengumpulan/get-by-id/${queryArg.id}` }),
    }),
    pengumpulanControllerUpdate: build.mutation<
      PengumpulanControllerUpdateApiResponse,
      PengumpulanControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/pengumpulan/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePengumpulanDto,
      }),
    }),
    pengumpulanControllerRemove: build.mutation<
      PengumpulanControllerRemoveApiResponse,
      PengumpulanControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/pengumpulan/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    nilaiControllerCreate: build.mutation<
      NilaiControllerCreateApiResponse,
      NilaiControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/nilai/create`,
        method: "POST",
        body: queryArg.createNilaiDto,
      }),
    }),
    nilaiControllerFindAll: build.query<
      ApiResponse<NilaiControllerFindAllApiResponse>,
      NilaiControllerFindAllApiArg
    >({
      query: () => ({ url: `/nilai/get-all` }),
    }),
    nilaiControllerFindOne: build.query<
      ApiResponse<NilaiControllerFindOneApiResponse>,
      NilaiControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/nilai/get-by-id/${queryArg.id}` }),
    }),
    nilaiControllerUpdate: build.mutation<
      NilaiControllerUpdateApiResponse,
      NilaiControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/nilai/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateNilaiDto,
      }),
    }),
    nilaiControllerRemove: build.mutation<
      NilaiControllerRemoveApiResponse,
      NilaiControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/nilai/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    userOnMateriControllerCreate: build.mutation<
      UserOnMateriControllerCreateApiResponse,
      UserOnMateriControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-materi/create`,
        method: "POST",
        body: queryArg.createUserOnMateriDto,
      }),
    }),
    userOnMateriControllerFindAll: build.query<
      ApiResponse<UserOnMateriControllerFindAllApiResponse>,
      UserOnMateriControllerFindAllApiArg
    >({
      query: () => ({ url: `/user-on-materi/get-all` }),
    }),
    userOnMateriControllerFindOneByMateriId: build.query<
      ApiResponse<UserOnMateriControllerFindOneByMateriIdApiResponse>,
      UserOnMateriControllerFindOneByMateriIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-materi/get-by-materi-id/${queryArg.materiId}`,
      }),
    }),
    userOnMateriControllerFindOneByUserId: build.query<
      ApiResponse<UserOnMateriControllerFindOneByUserIdApiResponse>,
      UserOnMateriControllerFindOneByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-materi/get-by-user-id/${queryArg.userId}`,
      }),
    }),
    userOnMateriControllerRemove: build.mutation<
      UserOnMateriControllerRemoveApiResponse,
      UserOnMateriControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-materi/delete/${queryArg.userId}/${queryArg.materiId}`,
        method: "DELETE",
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
          url: `/auth/login`,
          method: "POST",
          body: queryArg.loginDto,
        })
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout`, method: "POST" }),
    }),
    authControllerAutoLogin: build.mutation<
      AuthControllerAutoLoginApiResponse,
      AuthControllerAutoLoginApiArg
    >({
      query: () => ({ url: `/auth/autologin`, method: "POST" }),
    }),
    authControllerGetMe: build.query<
      ApiResponse<AuthControllerGetMeApiResponse>,
      AuthControllerGetMeApiArg
    >({
      query: () => ({ url: `/auth/get-me` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as ApiEiM3 };
export type UserControllerGetAllGuruApiResponse = GetAllGuru;
export type UserControllerGetAllGuruApiArg = void;
export type UserControllerGetAllSiswaApiResponse = GetAllSiswa;
export type UserControllerGetAllSiswaApiArg = void;
export type UserControllerCreateApiResponse = unknown;
export type UserControllerCreateApiArg = {
  /** Create a new User */
  createUserDto: CreateUserDto;
};
export type UserControllerGetAllApiResponse = unknown;
export type UserControllerGetAllApiArg = void;
export type UserControllerFinOneGuruApiResponse = GetGuruByID;
export type UserControllerFinOneGuruApiArg = {
  id: number;
};
export type UserControllerFinOneSiswaApiResponse = GetSiswaByID;
export type UserControllerFinOneSiswaApiArg = {
  id: number;
};
export type UserControllerUpdateApiResponse = unknown;
export type UserControllerUpdateApiArg = {
  id: number;
  /** Update User */
  updateUserDto: UpdateUserDto;
};
export type UserControllerDeleteApiResponse = unknown;
export type UserControllerDeleteApiArg = {
  id: number;
};
export type KelasControllerCreateApiResponse =
  /** status 201 Berhasil menambah data */ CreateKelasResponseDto;
export type KelasControllerCreateApiArg = {
  createKelaDto: CreateKelaDto;
};
export type KelasControllerFindAllApiResponse =
  /** status 200 Berhasil mengambil data */ FindAllKelasResponseDto;
export type KelasControllerFindAllApiArg = void;
export type KelasControllerFindOneApiResponse =
  /** status 200 Berhasil menemukan kelas */ FindOneKelasResponseDto;
export type KelasControllerFindOneApiArg = {
  id: number;
};
export type KelasControllerUpdateApiResponse =
  /** status 200 Berhasil memperbarui kelas */ UpdateKelasResponseDto;
export type KelasControllerUpdateApiArg = {
  id: number;
  updateKelaDto: UpdateKelaDto;
};
export type KelasControllerRemoveApiResponse =
  /** status 200 Berhasil menghapus kelas */ DeleteKelasResponseDto;
export type KelasControllerRemoveApiArg = {
  id: number;
};
export type UserOnKelasControllerCreateApiResponse = unknown;
export type UserOnKelasControllerCreateApiArg = {
  createUserOnKelaDto: CreateUserOnKelaDto;
};
export type UserOnKelasControllerFindAllApiResponse = unknown;
export type UserOnKelasControllerFindAllApiArg = void;
export type UserOnKelasControllerFindOneByUserIdApiResponse = unknown;
export type UserOnKelasControllerFindOneByUserIdApiArg = {
  userId: number;
};
export type UserOnKelasControllerFindOneByKelasIdApiResponse = unknown;
export type UserOnKelasControllerFindOneByKelasIdApiArg = {
  kelasId: number;
};
export type UserOnKelasControllerUpdateApiResponse = unknown;
export type UserOnKelasControllerUpdateApiArg = {
  updateUserOnKelasDto: UpdateUserOnKelasDto;
};
export type UserOnKelasControllerRemoveApiResponse = unknown;
export type UserOnKelasControllerRemoveApiArg = {
  userId: number;
  kelasId: number;
};
export type PelajaranControllerCreateApiResponse = unknown;
export type PelajaranControllerCreateApiArg = {
  createPelajaranDto: CreatePelajaranDto;
};
export type PelajaranControllerFindAllApiResponse = GetAllPelajaran;
export type PelajaranControllerFindAllApiArg = void;
export type PelajaranControllerFindOneApiResponse = unknown;
export type PelajaranControllerFindOneApiArg = {
  id: number;
};
export type PelajaranControllerUpdateApiResponse = unknown;
export type PelajaranControllerUpdateApiArg = {
  id: number;
  updatePelajaranDto: UpdatePelajaranDto;
};
export type PelajaranControllerRemoveApiResponse = unknown;
export type PelajaranControllerRemoveApiArg = {
  id: number;
};
export type MateriControllerCreateApiResponse =
  /** status 201 Berhasil menambah materi */ CreateMateriResponseDto;
export type MateriControllerCreateApiArg = {
  createMateriDto: FormData;
};
export type MateriControllerFindAllApiResponse =
  /** status 200 Berhasil mengambil semua materi */ FindAllMateriResponseDto;
export type MateriControllerFindAllApiArg = void;
export type MateriControllerFindOneApiResponse =
  /** status 200 Berhasil menemukan materi */ FindOneMateriResponseDto;
export type MateriControllerFindOneApiArg = {
  id: number;
};
export type MateriControllerUpdateApiResponse =
  /** status 200 Berhasil memperbarui materi */ UpdateMateriResponseDto;
export type MateriControllerUpdateApiArg = {
  id: number;
  updateMateriDto: UpdateMateriDto;
};
export type MateriControllerRemoveApiResponse =
  /** status 200 Berhasil menghapus materi */ DeleteMateriResponseDto;
export type MateriControllerRemoveApiArg = {
  id: number;
};
export type TugasControllerCreateApiResponse = unknown;
export type TugasControllerCreateApiArg = {
  createTugasDto: CreateTugasDto;
};
export type TugasControllerFindAllApiResponse =
  /** status 200 Berhasil mengambil semua tugas */ FindAllTugasResponseDto;
export type TugasControllerFindAllApiArg = void;
export type TugasControllerFindOneApiResponse = unknown;
export type TugasControllerFindOneApiArg = {
  id: number;
};
export type TugasControllerUpdateApiResponse = unknown;
export type TugasControllerUpdateApiArg = {
  id: number;
  updateTugasDto: UpdateTugasDto;
};
export type TugasControllerRemoveApiResponse = unknown;
export type TugasControllerRemoveApiArg = {
  id: number;
};
export type PengumpulanControllerCreateApiResponse = unknown;
export type PengumpulanControllerCreateApiArg = {
  createPengumpulanDto: CreatePengumpulanDto;
};
export type PengumpulanControllerFindAllApiResponse = unknown;
export type PengumpulanControllerFindAllApiArg = void;
export type PengumpulanControllerFindOneApiResponse = unknown;
export type PengumpulanControllerFindOneApiArg = {
  id: number;
};
export type PengumpulanControllerUpdateApiResponse = unknown;
export type PengumpulanControllerUpdateApiArg = {
  id: number;
  updatePengumpulanDto: UpdatePengumpulanDto;
};
export type PengumpulanControllerRemoveApiResponse = unknown;
export type PengumpulanControllerRemoveApiArg = {
  id: number;
};
export type NilaiControllerCreateApiResponse =
  /** status 201 Berhasil menambah nilai */ CreateNilaiResponseDto;
export type NilaiControllerCreateApiArg = {
  createNilaiDto: CreateNilaiDto;
};
export type NilaiControllerFindAllApiResponse =
  /** status 200 Berhasil mengambil semua nilai */ FindAllNilaiResponseDto;
export type NilaiControllerFindAllApiArg = void;
export type NilaiControllerFindOneApiResponse =
  /** status 200 Berhasil menemukan nilai */ FindOneNilaiResponseDto;
export type NilaiControllerFindOneApiArg = {
  id: number;
};
export type NilaiControllerUpdateApiResponse =
  /** status 200 Berhasil memperbarui nilai */ UpdateNilaiResponseDto;
export type NilaiControllerUpdateApiArg = {
  id: number;
  updateNilaiDto: UpdateNilaiDto;
};
export type NilaiControllerRemoveApiResponse =
  /** status 200 Berhasil menghapus nilai */ DeleteNilaiResponseDto;
export type NilaiControllerRemoveApiArg = {
  id: number;
};
export type UserOnMateriControllerCreateApiResponse = unknown;
export type UserOnMateriControllerCreateApiArg = {
  createUserOnMateriDto: CreateUserOnMateriDto;
};
export type UserOnMateriControllerFindAllApiResponse = unknown;
export type UserOnMateriControllerFindAllApiArg = void;
export type UserOnMateriControllerFindOneByMateriIdApiResponse = unknown;
export type UserOnMateriControllerFindOneByMateriIdApiArg = {
  materiId: number;
};
export type UserOnMateriControllerFindOneByUserIdApiResponse = unknown;
export type UserOnMateriControllerFindOneByUserIdApiArg = {
  userId: number;
};
export type UserOnMateriControllerRemoveApiResponse = unknown;
export type UserOnMateriControllerRemoveApiArg = {
  userId: number;
  materiId: number;
};
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  loginDto: LoginDto;
};
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type AuthControllerAutoLoginApiResponse = unknown;
export type AuthControllerAutoLoginApiArg = void;
export type AuthControllerGetMeApiResponse = GetMeResponse;
export type AuthControllerGetMeApiArg = void;
export type CreateUserDto = {
  nama_lengkap: string;
  email?: string;
  username: string;
  password: string;
  confPassword: string;
  roleId: number;
};
export type UpdateUserDto = {
  nama_lengkap: string;
  email?: string;
  username: string;
  password: string;
  confPassword: string;
};
export type CreateKelasResponseDto = {
  status: string;
  message: string;
  /** Kelas yang baru dibuat */
  kelas: object;
};
export type CreateKelaDto = {
  nama_kelas: string;
};
export type KelasDto = {
  id: number;
  nama_kelas: string;
};
export type FindAllKelasResponseDto = {
  status: string;
  message: string;
  /** List of Kelas */
  kelas: KelasDto[];
};
export type UserDto = {
  nama_lengkap: string;
};
export type PelajaranDto = {
  nama_pelajaran: string;
};
export type KelasDetailDto = {
  id: number;
  nama_kelas: string;
  users: UserDto[];
  pelajaran: PelajaranDto[];
};
export type FindOneKelasResponseDto = {
  status: string;
  message: string;
  /** Detail kelas yang ditemukan */
  kelas: KelasDetailDto;
};
export type UpdateKelasResponseDto = {
  status: string;
  message: string;
  /** Kelas yang diperbarui */
  kelas: object;
};
export type UpdateKelaDto = {
  nama_kelas: string;
};
export type DeleteKelasResponseDto = {
  status: string;
  message: string;
};
export type CreateUserOnKelaDto = {
  userId: number;
  kelasId: number;
};
export type UpdateUserOnKelasDto = {
  oldUserId: number;
  oldKelasId: number;
  newUserId?: number;
  newKelasId?: number;
};
export type CreatePelajaranDto = {
  kelasId: number;
  nama_pelajaran: string;
};
export type UpdatePelajaranDto = {
  kelasId: number;
  nama_pelajaran: string;
};
export type CreateMateriResponseDto = {
  status: string;
  message: string;
  /** Materi yang baru dibuat */
  materi: object;
};
export type CreateMateriDto = {
  /** ID pelajaran yang terkait dengan materi */
  pelajaranId: number;
  /** Nama materi */
  nama_materi: string;
  /** File materi */
  file?: string;
  /** File URL materi */
  file_url?: string;
  /** Link video YouTube terkait materi */
  isi_materi: string;
};
export type TugasDto = {
  id: number;
  materiId: number;
  creatorId: number;
  nama_tugas: string;
  file: string | null;
  file_url: string | null;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};
export type MateriDto = {
  id: number;
  pelajaranId: number;
  creatorId: number;
  nama_materi: string;
  file: string | null;
  file_url: string | null;
  yt_link: string | null;
  file_link: string | null;
  createdAt: string;
  updatedAt: string;
  /** List of Tugas associated with the Materi */
  tugas: TugasDto[];
};
export type FindAllMateriResponseDto = {
  status: string;
  message: string;
  /** List of Materi */
  materi: MateriDto[];
};
export type FindOneMateriResponseDto = {
  status: string;
  message: string;
  materi: MateriDto;
};
export type MateriWithoutTugasDto = {
  id: number;
  pelajaranId: number;
  creatorId: number;
  nama_materi: string;
  file: string | null;
  file_url: string | null;
  yt_link: string | null;
  file_link: string | null;
  createdAt: string;
  updatedAt: string;
};
export type UpdateMateriResponseDto = {
  status: string;
  message: string;
  /** Materi yang diperbarui tanpa tugas */
  materi: MateriWithoutTugasDto;
};
export type UpdateMateriDto = {
  /** ID pelajaran yang terkait dengan materi */
  pelajaranId?: number;
  /** Nama materi */
  nama_materi?: string;
  /** File materi */
  file?: string;
  /** File URL materi */
  file_url?: string;
  /** Link video YouTube terkait materi */
  yt_link?: string;
  /** Link file tambahan terkait materi */
  file_link?: string;
};
export type DeleteMateriResponseDto = {
  status: string;
  message: string;
};
export type CreateTugasDto = {
  /** ID materi yang terkait dengan tugas */
  materiId: number;
  /** Nama tugas */
  nama_tugas: string;
  /** file tugas */
  file?: string;
  /** File URL tugas */
  file_url?: string;
  /** Tanggal batas waktu tugas */
  deadline: string;
};
export type Tugas = {
  id: number;
  materiId: number;
  creatorId: number;
  nama_tugas: string;
  file?: string | null;
  file_url?: string | null;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};
export type FindAllTugasResponseDto = {
  status: string;
  message: string;
  tugas: Tugas[];
};
export type UpdateTugasDto = {
  /** ID materi yang terkait dengan tugas */
  materiId: number;
  /** Nama tugas */
  nama_tugas: string;
  /** file tugas */
  file?: string;
  /** File URL tugas */
  file_url?: string;
  /** Tanggal batas waktu tugas */
  deadline: string;
};
export type CreatePengumpulanDto = {
  /** ID tugas yang terkait dengan pengumpulan */
  tugasId: number;
  /** File tugas yang dikumpulkan */
  file?: string;
  /** File URL tugas yang dikumpulkan */
  file_url?: string;
};
export type UpdatePengumpulanDto = {
  /** ID tugas yang terkait dengan pengumpulan */
  tugasId: number;
  /** File tugas yang dikumpulkan */
  file?: string;
  /** File URL tugas yang dikumpulkan */
  file_url?: string;
};
export type CreateNilaiResponseDto = {
  status: string;
  message: string;
  /** Nilai yang baru dibuat */
  nilai: object;
};
export type CreateNilaiDto = {
  /** ID Pengumpulan yang terkait dengan nilai */
  pengumpulanId: number;
  /** Nilai yang diberikan */
  nilai: number;
};
export type FindAllNilaiResponseDto = {
  status: string;
  message: string;
  /** Daftar nilai dengan relasi tambahan */
  nilai: object[];
};
export type FindOneNilaiResponseDto = {
  status: string;
  message: string;
  /** Nilai yang ditemukan */
  nilai: object;
};
export type UpdateNilaiResponseDto = {
  status: string;
  message: string;
  /** Nilai yang diperbarui */
  nilai: object;
};
export type UpdateNilaiDto = {
  /** ID Pengumpulan yang terkait dengan nilai */
  pengumpulanId: number;
  /** Nilai yang diberikan */
  nilai: number;
};
export type DeleteNilaiResponseDto = {
  status: string;
  message: string;
};
export type CreateUserOnMateriDto = {
  /** ID materi yang terkait dengan pengguna */
  materiId: number;
};
export type LoginDto = {
  username: string;
  password: string;
  rememberMe: boolean;
};
export const {
  useUserControllerGetAllGuruQuery,
  useUserControllerGetAllSiswaQuery,
  useUserControllerCreateMutation,
  useUserControllerGetAllQuery,
  useUserControllerFinOneGuruQuery,
  useUserControllerFinOneSiswaQuery,
  useUserControllerUpdateMutation,
  useUserControllerDeleteMutation,
  useKelasControllerCreateMutation,
  useKelasControllerFindAllQuery,
  useKelasControllerFindOneQuery,
  useKelasControllerUpdateMutation,
  useKelasControllerRemoveMutation,
  useUserOnKelasControllerCreateMutation,
  useUserOnKelasControllerFindAllQuery,
  useUserOnKelasControllerFindOneByUserIdQuery,
  useUserOnKelasControllerFindOneByKelasIdQuery,
  useUserOnKelasControllerUpdateMutation,
  useUserOnKelasControllerRemoveMutation,
  usePelajaranControllerCreateMutation,
  usePelajaranControllerFindAllQuery,
  usePelajaranControllerFindOneQuery,
  usePelajaranControllerUpdateMutation,
  usePelajaranControllerRemoveMutation,
  useMateriControllerCreateMutation,
  useMateriControllerFindAllQuery,
  useMateriControllerFindOneQuery,
  useMateriControllerUpdateMutation,
  useMateriControllerRemoveMutation,
  useTugasControllerCreateMutation,
  useTugasControllerFindAllQuery,
  useTugasControllerFindOneQuery,
  useTugasControllerUpdateMutation,
  useTugasControllerRemoveMutation,
  usePengumpulanControllerCreateMutation,
  usePengumpulanControllerFindAllQuery,
  usePengumpulanControllerFindOneQuery,
  usePengumpulanControllerUpdateMutation,
  usePengumpulanControllerRemoveMutation,
  useNilaiControllerCreateMutation,
  useNilaiControllerFindAllQuery,
  useNilaiControllerFindOneQuery,
  useNilaiControllerUpdateMutation,
  useNilaiControllerRemoveMutation,
  useUserOnMateriControllerCreateMutation,
  useUserOnMateriControllerFindAllQuery,
  useUserOnMateriControllerFindOneByMateriIdQuery,
  useUserOnMateriControllerFindOneByUserIdQuery,
  useUserOnMateriControllerRemoveMutation,
  useAuthControllerLoginMutation,
  useAuthControllerLogoutMutation,
  useAuthControllerAutoLoginMutation,
  useAuthControllerGetMeQuery,
} = injectedRtkApi;
