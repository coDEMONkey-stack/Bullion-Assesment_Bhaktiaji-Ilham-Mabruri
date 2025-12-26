# Bullion Ecosystem Admin Dashboard

Admin dashboard untuk manage user menggunakan Vue 3 dan Tailwind CSS.

**Live Demo:** https://bullion-assesment-bhaktiaji-ilham-m.vercel.app/

## Tech Stack

- Vue.js 3 (Composition API)
- Vite
- Vue Router
- Pinia
- Tailwind CSS
- FontAwesome
- Vue Toastification
- Axios
- Crypto-JS

## Fitur

**Login**
- Validasi email dan password
- Password di-hash SHA-256 sebelum kirim ke API
- Redirect otomatis kalau sudah login

**Register**
- Form lengkap dengan validasi:
  - Nama depan & belakang (required)
  - Jenis kelamin (required)
  - Tanggal lahir (required)
  - Email (required, format valid)
  - No. handphone (required)
  - Alamat (required)
  - Foto profil (required, max 5MB, JPG/JPEG)
  - Password (required, min 8 karakter, harus ada huruf & angka, min 1 kapital)
  - Konfirmasi password (harus sama)

**Dashboard**
- List semua user yang terdaftar
- Tabel dengan pagination
- Action: Lihat, Edit, Hapus
- Sidebar navigation
- Logout

**View & Edit User**
- Modal untuk lihat detail user
- Modal untuk edit user
- Password optional saat edit
- Preview foto profil

## Project Structure

```
assets/
  logo/
  icon/
src/
  components/
    EditUserModal.vue
    ViewUserModal.vue
  composables/
    useFormValidation.js
  pages/
    Dashboard.vue
    Login.vue
    Register.vue
  router/
    index.js
  services/
    api.js
    authService.js
    userService.js
  stores/
    auth.js
  utils/
    dateFormatter.js
    imageHelper.js
  App.vue
  main.js
  style.css
```

## Setup

Install dependencies:
```bash
npm install
```

Jalankan dev server:
```bash
npm run dev
```

Build production:
```bash
npm run build
```

## API Config

Base URL: `https://api-test.bullionecosystem.com/api/v1/`

Admin credentials:
- Email: `admin@email.com`
- Password: `admin123`

## Auth & Routes

Dashboard hanya bisa diakses kalau sudah login. Kalau belum, redirect ke login page.

Login & Register hanya bisa diakses kalau belum login. Kalau sudah login, redirect ke dashboard.

Token disimpan di localStorage. Axios interceptor handle auto-logout kalau token expired (401).

## Form Validation

Semua form punya validasi real-time:
- Email format check
- Password rules (length, alphabet, number, capital)
- File upload (size & type)
- Required fields

## Utils

**dateFormatter.js**
- `formatDateForInput()` - untuk input date
- `formatDate()` - DD/MM/YYYY
- `formatDateLong()` - DD Month YYYY

**imageHelper.js**
- `getPhotoUrl()` - handle photo URL dari API atau local

**useFormValidation.js**
- Reusable validation functions

## Notes

- Password di-hash SHA-256 sebelum kirim
- Token di localStorage
- Auto redirect kalau tidak authenticated
- Session management via axios interceptor
- State management pakai Pinia

## Development

Path aliases:
- `@/` → `src/`
- `@assets/` → `assets/`

Code style:
- Composition API
- `<script setup>` syntax
