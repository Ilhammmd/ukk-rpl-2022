<?=$this->extend('template/form')?>
<?=$this->section("title")?>Register<?=$this->endSection()?>
<?=$this->section("content")?>
<div class="text-center">
    <h1 class="h4 text-gray-900 mb-4">Daftar</h1>
</div>
<?=$this->include("include/alert")?>
<form class="user" method="post" action="<?= base_url() ?>/auth/register">
    <div class="form-group">
        <input type="text" class="form-control form-control-user" name="nik" aria-describedby="emailHelp" placeholder="NIK">
    </div>
    <div class="form-group">
        <input type="text" class="form-control form-control-user" name="nama" placeholder="Nama">
    </div>
    <div class="form-group">
        <input type="password" class="form-control form-control-user" name="password" placeholder="Kata Sandi">
    </div>
    <div class="form-group">
        <input type="password" class="form-control form-control-user" name="confirm_password" placeholder="Konfirmasi Sandi">
    </div>
    <button type="submit" class="btn btn-success btn-user btn-block">
        Register
    </button>
</form>
<hr>
<div class="text-center">
    <a class="small" href="<?= base_url() ?>/login">Saya Punya Akun</a>
</div>
<?= $this->endSection() ?>