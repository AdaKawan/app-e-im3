"use client";

import { Sidebar } from "flowbite-react";
import { HiOutlineCollection } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBook, FaBookOpen, FaTasks } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export function SidebarGuru() {
    const isShow = useSelector((state: RootState) => state.showSideBar.isShow);

    return (
      <aside id="default-sidebar" className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-[60px] font-normal lg:flex lg:pt-12 md:pt-12 sm:pt-14 transition-transform duration-500 ease-in-out transform md:translate-x-0 ${isShow ? '' : 'max-sm:-translate-x-full'}`} aria-label="Sidebar">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/kelas" as={Link}icon={SiGoogleclassroom}>
                Kelas
              </Sidebar.Item>
              <Sidebar.Item href="/pelajaran" as={Link}icon={FaBook}>
                Pelajaran
              </Sidebar.Item>
              <Sidebar.Item href="/materi" as={Link}icon={FaBookOpen}>
                Materi
              </Sidebar.Item>
              <Sidebar.Item href="tugas" as={Link}icon={FaTasks}>
                Tugas
              </Sidebar.Item>
              <Sidebar.Item href="/pengumpulan" as={Link}icon={HiOutlineCollection}>
                Pengumpulan
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
    );
  }
  