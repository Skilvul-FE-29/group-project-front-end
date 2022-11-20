import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const OrderDetail = (props) => {

    useEffect(() => {
        axios
            .get("https://634a01375df95285140a732e.mockapi.io/order")
            .then((res) => {
                setDataRequest(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const { teachers } = useSelector((state) => state.teachers);

    const toggleDetail = () => {
        setDetail(!detail)
    }

    useEffect(() => {
        dispatch(getTeachers());
    }, []);

    return (
        <div className="pesanan" key={index}>

            <p className="urutan-pesanan">Pesanan #{urutan}</p>

            <div className="pesanan-waktu">
                <p className="pesanan-sub-judul">Waktu Sesi</p>
                <p className="tanggal">Tanggal: {item.tanggal}</p>
                <p className="mulai">Jam mulai: {item.jamMulai}</p>
                <p className="lama">Durasi sesi: {item.durasi}</p>
            </div>

            <p onClick={toggleDetail} className="toggle-detail">{detail ? <span>Tutup Detail</span> : <span>Lihat Detail</span>}</p>

            {
                detail &&

                <>

                    <div className="pesanan-materi">
                        <p className="pesanan-sub-judul">Materi Sesi</p>
                        <p className="jenjang-materi">Jenjang materi: {item.jenjangMateri}</p>
                        <p className="topik-materi">Topik materi: {item.topik}</p>
                        <p className="detail-materi">Detail materi: {item.detailTopik}</p>
                        <p className="tambahan-materi">Tambahan: {item.tambahan}</p>
                    </div>

                    <div className="pesanan-lokasi">
                        <p className="pesanan-sub-judul">Lokasi Sesi</p>
                        <p className="mode-lokasi">Mode pembelajaran: {item.modeBelajar}</p>
                        <p className="alamat-lokasi">alamat: {item.alamat}</p>
                        <p className="maps-lokasi">maps: {item.maps}</p>
                    </div>

                    {teachers.map((teacher, index) => {
                        if (teacher.id == item.teacherId)
                            return (
                                <div className="teacher-info" key={index}>
                                    <p>Pengajar</p>
                                    <img src={`https://drive.google.com/uc?export=view&id=${teacher.foto}`} alt="" className="info-foto" />
                                    <div className="info-text">
                                        <p className="nama">{teacher.nama}</p>
                                        <p className="edukasi">{teacher.edukasi[0].lokasi} | {teacher.edukasi[0].jurusan}</p>
                                    </div>
                                </div>
                            )
                    })}
                </>
            }


        </div>
    )
}

export default OrderDetail