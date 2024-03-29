<?=$this->extend('template/form')?>
<?=$this->section("title")?>Login<?=$this->endSection()?>
<?=$this->section("content")?>
<div class="text-center">
    <h1 class="h4 text-gray-900 mb-4">Selamat Datang</h1>
</div>
<?=$this->include("include/alert")?>
<form class="user" method="post" action="<?= base_url() ?>/auth/login">
    <div class="form-group">
        <input type="text" class="form-control form-control-user" name="nik" placeholder="NIK">
    </div>
    <div class="form-group">
        <input type="password" class="form-control form-control-user" name="password" placeholder="Kata Sandi">
    </div>
    <div class="form-group">
        <div class="custom-control custom-checkbox small">
            <input type="checkbox" class="custom-control-input" id="customCheck">
            <label class="custom-control-label" for="customCheck">Ingatkan Saya
                </label>
        </div>
    </div>
    <button type="submit" class="btn btn-success btn-user btn-block">
        Masuk
    </button>
</form>
<hr>
<div class="text-center">
    <a class="small" href="<?= base_url() ?>/register">Saya Pengguna Baru</a>
</div>
<?= $this->endSection() ?>