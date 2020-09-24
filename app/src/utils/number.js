export function formatNumber(num) {
  return !isNaN(num) ? new Intl.NumberFormat('id-ID').format(num) : num
}