const BASE_URL = 'https://api-test.bullionecosystem.com'

export const getPhotoUrl = (photo) => {
  if (!photo) return ''
  if (photo.startsWith('http')) return photo
  if (photo.startsWith('data:')) return photo
  if (photo.length > 100 && !photo.startsWith('/') && !photo.startsWith('http') && !photo.startsWith('data:')) {
    if (photo.includes('iVBORw0KGgo') || photo.match(/^[A-Za-z0-9+/=]+$/)) {
      return `data:image/png;base64,${photo}`
    }
  }
  return `${BASE_URL}${photo.startsWith('/') ? '' : '/'}${photo}`
}

