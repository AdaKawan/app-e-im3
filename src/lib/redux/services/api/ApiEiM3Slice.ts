import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axiosBaseQuery";
import { UserControllerGetAllGuruApiResponse, UserControllerGetAllGuruApiArg, UserControllerGetAllSiswaApiResponse, UserControllerGetAllSiswaApiArg, UserControllerCreateApiResponse, UserControllerCreateApiArg, UserControllerGetAllApiResponse, UserControllerGetAllApiArg, UserControllerFinOneGuruApiResponse, UserControllerFinOneGuruApiArg, UserControllerFinOneSiswaApiResponse, UserControllerFinOneSiswaApiArg, UserControllerUpdateApiResponse, UserControllerUpdateApiArg, UserControllerDeleteApiResponse, UserControllerDeleteApiArg, KelasControllerCreateApiResponse, KelasControllerCreateApiArg, KelasControllerFindAllApiResponse, KelasControllerFindAllApiArg, KelasControllerFindOneApiResponse, KelasControllerFindOneApiArg, KelasControllerUpdateApiResponse, KelasControllerUpdateApiArg, KelasControllerRemoveApiResponse, KelasControllerRemoveApiArg, UserOnKelasControllerCreateApiResponse, UserOnKelasControllerCreateApiArg, UserOnKelasControllerFindAllApiResponse, UserOnKelasControllerFindAllApiArg, UserOnKelasControllerFindOneByUserIdApiResponse, UserOnKelasControllerFindOneByUserIdApiArg, UserOnKelasControllerFindOneByKelasIdApiResponse, UserOnKelasControllerFindOneByKelasIdApiArg, UserOnKelasControllerUpdateApiResponse, UserOnKelasControllerUpdateApiArg, UserOnKelasControllerRemoveApiResponse, UserOnKelasControllerRemoveApiArg, PelajaranControllerCreateApiResponse, PelajaranControllerCreateApiArg, PelajaranControllerFindAllApiResponse, PelajaranControllerFindAllApiArg, PelajaranControllerFindOneApiResponse, PelajaranControllerFindOneApiArg, PelajaranControllerUpdateApiResponse, PelajaranControllerUpdateApiArg, PelajaranControllerRemoveApiResponse, PelajaranControllerRemoveApiArg, MateriControllerCreateApiResponse, MateriControllerCreateApiArg, MateriControllerFindAllApiResponse, MateriControllerFindAllApiArg, MateriControllerFindOneApiResponse, MateriControllerFindOneApiArg, MateriControllerUpdateApiResponse, MateriControllerUpdateApiArg, MateriControllerRemoveApiResponse, MateriControllerRemoveApiArg, TugasControllerCreateApiResponse, TugasControllerCreateApiArg, TugasControllerFindAllApiResponse, TugasControllerFindAllApiArg, TugasControllerFindOneApiResponse, TugasControllerFindOneApiArg, TugasControllerUpdateApiResponse, TugasControllerUpdateApiArg, TugasControllerRemoveApiResponse, TugasControllerRemoveApiArg, PengumpulanControllerCreateApiResponse, PengumpulanControllerCreateApiArg, PengumpulanControllerFindAllApiResponse, PengumpulanControllerFindAllApiArg, PengumpulanControllerFindOneApiResponse, PengumpulanControllerFindOneApiArg, PengumpulanControllerUpdateApiResponse, PengumpulanControllerUpdateApiArg, PengumpulanControllerRemoveApiResponse, PengumpulanControllerRemoveApiArg, NilaiControllerCreateApiResponse, NilaiControllerCreateApiArg, NilaiControllerFindAllApiResponse, NilaiControllerFindAllApiArg, NilaiControllerFindOneApiResponse, NilaiControllerFindOneApiArg, NilaiControllerUpdateApiResponse, NilaiControllerUpdateApiArg, NilaiControllerRemoveApiResponse, NilaiControllerRemoveApiArg, UserOnMateriControllerCreateApiResponse, UserOnMateriControllerCreateApiArg, UserOnMateriControllerFindAllApiResponse, UserOnMateriControllerFindAllApiArg, UserOnMateriControllerFindOneByMateriIdApiResponse, UserOnMateriControllerFindOneByMateriIdApiArg, UserOnMateriControllerFindOneByUserIdApiResponse, UserOnMateriControllerFindOneByUserIdApiArg, UserOnMateriControllerRemoveApiResponse, UserOnMateriControllerRemoveApiArg, AuthControllerLoginApiResponse, AuthControllerLoginApiArg, AuthControllerLogoutApiResponse, AuthControllerLogoutApiArg, AuthControllerAutoLoginApiResponse, AuthControllerAutoLoginApiArg, AuthControllerGetMeApiArg, AuthControllerGetMeApiResponse } from "./endpoints/ApiEiM3";
import { ApiResponse } from "@/types/ApiResponse";
import { getCookie } from 'cookies-next';

export const ApiEiM3Slice = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: 'https://api-e-im3.vercel.app' }),
  endpoints: (build) => ({
    userControllerGetAllGuru: build.query<
      UserControllerGetAllGuruApiResponse,
      UserControllerGetAllGuruApiArg
    >({
      query: () => ({ 
        url: `/users/get-all-guru`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerGetAllSiswa: build.query<
      UserControllerGetAllSiswaApiResponse,
      UserControllerGetAllSiswaApiArg
    >({
      query: () => ({ 
        url: `/users/get-all-siswa`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerCreate: build.mutation<
      UserControllerCreateApiResponse,
      UserControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/create`,
        method: "POST",
        body: queryArg.createUserDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerGetAll: build.query<
      UserControllerGetAllApiResponse,
      UserControllerGetAllApiArg
    >({
      query: () => ({ 
        url: `/users/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerFinOneGuru: build.query<
      UserControllerFinOneGuruApiResponse,
      UserControllerFinOneGuruApiArg
    >({
      query: (queryArg) => ({ 
        url: `/users/find-one-guru/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerFinOneSiswa: build.query<
      UserControllerFinOneSiswaApiResponse,
      UserControllerFinOneSiswaApiArg
    >({
      query: (queryArg) => ({ 
        url: `/users/find-one-siswa/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerUpdate: build.mutation<
      UserControllerUpdateApiResponse,
      UserControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userControllerDelete: build.mutation<
      UserControllerDeleteApiResponse,
      UserControllerDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/users/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    kelasControllerFindAll: build.query<
      KelasControllerFindAllApiResponse,
      KelasControllerFindAllApiArg
    >({
      query: () => ({
        url: `/kelas/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    kelasControllerFindOne: build.query<
      KelasControllerFindOneApiResponse,
      KelasControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/kelas/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    kelasControllerUpdate: build.mutation<
      KelasControllerUpdateApiResponse,
      KelasControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/kelas/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateKelaDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    kelasControllerRemove: build.mutation<
      KelasControllerRemoveApiResponse,
      KelasControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/kelas/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userOnKelasControllerFindAll: build.query<
      UserOnKelasControllerFindAllApiResponse,
      UserOnKelasControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/user-on-kelas/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userOnKelasControllerFindOneByUserId: build.query<
      UserOnKelasControllerFindOneByUserIdApiResponse,
      UserOnKelasControllerFindOneByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-kelas/find-by-user-id/${queryArg.userId}`,
      }),
    }),
    userOnKelasControllerFindOneByKelasId: build.query<
      UserOnKelasControllerFindOneByKelasIdApiResponse,
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pelajaranControllerFindAll: build.query<
      PelajaranControllerFindAllApiResponse,
      PelajaranControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/pelajaran/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pelajaranControllerFindOne: build.query<
      PelajaranControllerFindOneApiResponse,
      PelajaranControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/pelajaran/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pelajaranControllerUpdate: build.mutation<
      PelajaranControllerUpdateApiResponse,
      PelajaranControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/pelajaran/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePelajaranDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pelajaranControllerRemove: build.mutation<
      PelajaranControllerRemoveApiResponse,
      PelajaranControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/pelajaran/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
          'Content-Type': 'multipart/form-data',
        }
      }),
    }),
    materiControllerFindAll: build.query<
      MateriControllerFindAllApiResponse,
      MateriControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/materi/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    materiControllerFindOne: build.query<
      MateriControllerFindOneApiResponse,
      MateriControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/materi/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    materiControllerUpdate: build.mutation<
      MateriControllerUpdateApiResponse,
      MateriControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/materi/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateMateriDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    materiControllerRemove: build.mutation<
      MateriControllerRemoveApiResponse,
      MateriControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/materi/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    tugasControllerFindAll: build.query<
      TugasControllerFindAllApiResponse,
      TugasControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/tugas/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    tugasControllerFindOne: build.query<
      TugasControllerFindOneApiResponse,
      TugasControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/tugas/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    tugasControllerUpdate: build.mutation<
      TugasControllerUpdateApiResponse,
      TugasControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/tugas/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateTugasDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    tugasControllerRemove: build.mutation<
      TugasControllerRemoveApiResponse,
      TugasControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/tugas/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pengumpulanControllerFindAll: build.query<
      PengumpulanControllerFindAllApiResponse,
      PengumpulanControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/pengumpulan/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pengumpulanControllerFindOne: build.query<
      PengumpulanControllerFindOneApiResponse,
      PengumpulanControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/pengumpulan/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pengumpulanControllerUpdate: build.mutation<
      PengumpulanControllerUpdateApiResponse,
      PengumpulanControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/pengumpulan/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePengumpulanDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    pengumpulanControllerRemove: build.mutation<
      PengumpulanControllerRemoveApiResponse,
      PengumpulanControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/pengumpulan/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    nilaiControllerFindAll: build.query<
      NilaiControllerFindAllApiResponse,
      NilaiControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/nilai/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    nilaiControllerFindOne: build.query<
      NilaiControllerFindOneApiResponse,
      NilaiControllerFindOneApiArg
    >({
      query: (queryArg) => ({ 
        url: `/nilai/get-by-id/${queryArg.id}`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    nilaiControllerUpdate: build.mutation<
      NilaiControllerUpdateApiResponse,
      NilaiControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/nilai/update/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateNilaiDto,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    nilaiControllerRemove: build.mutation<
      NilaiControllerRemoveApiResponse,
      NilaiControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/nilai/delete/${queryArg.id}`,
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userOnMateriControllerFindAll: build.query<
      UserOnMateriControllerFindAllApiResponse,
      UserOnMateriControllerFindAllApiArg
    >({
      query: () => ({ 
        url: `/user-on-materi/get-all`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    userOnMateriControllerFindOneByMateriId: build.query<
      UserOnMateriControllerFindOneByMateriIdApiResponse,
      UserOnMateriControllerFindOneByMateriIdApiArg
    >({
      query: (queryArg) => ({
        url: `/user-on-materi/get-by-materi-id/${queryArg.materiId}`,
      }),
    }),
    userOnMateriControllerFindOneByUserId: build.query<
      UserOnMateriControllerFindOneByUserIdApiResponse,
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
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
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ 
        url: `/auth/logout`, method: "POST",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    authControllerAutoLogin: build.mutation<
      AuthControllerAutoLoginApiResponse,
      AuthControllerAutoLoginApiArg
    >({
      query: () => ({ 
        url: `/auth/autologin`, method: "POST",
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
    authControllerGetMe: build.query<
      AuthControllerGetMeApiResponse,
      AuthControllerGetMeApiArg
    >({
      query: () => ({ 
        url: `/auth/get-me`,
        headers: {
          'Authorization': `Bearer ${getCookie('refreshToken')}`,
        }
      }),
    }),
  }),
})

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
} = ApiEiM3Slice