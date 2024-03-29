<?php

namespace App\Models;

class CatatanPerjalanan_model extends BaseModel  {
    public static function tambah($tanggal,$waktu,$lokasi,$suhu) {
        $data = BaseModel::csvFileToJson("catatan_perjalanan.csv");
        file_put_contents("catatan_perjalanan.csv","\r\n".$tanggal.",".$waktu.",".$lokasi.",".$suhu,FILE_APPEND);
        return true;
    }

    public static function getAll() {
        $data = BaseModel::csvFileToJson("catatan_perjalanan.csv");
        return $data;
    }
    public static function get_byNIK($nik){
        $data = BaseModel::csvFileToJson("catatan_perjalanan.csv");
        $result = array();
        foreach ($data as $key => $value){
            if($value['nik'] == $nik){
                array_push($filtered,$value);
            }
        }
        return $filtered;
    }
}