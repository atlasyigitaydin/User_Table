<script setup>
const userStore = useUsersStore()

const chartData = ref()
const chartOptions = ref()

const dataset = ref({
  buy: [],
  sell: [],
})

const setDataset = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (1000 * 4 - 100 + 1)) + 100
  }
  dataset.value.buy = Array.from({ length: 12 }, () => getRandomNumber())
  dataset.value.sell = Array.from({ length: 12 }, () => getRandomNumber())
}

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    datasets: [
      {
        label: 'Sell',
        fill: false,
        borderColor: documentStyle.getPropertyValue('--green-400'),
        yAxisID: 'y',
        tension: 0.4,
        data: dataset.value.buy,
      },
      {
        label: 'Buy',
        fill: false,
        borderColor: documentStyle.getPropertyValue('--red-400'),
        yAxisID: 'y1',
        tension: 0.4,
        data: dataset.value.sell,
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-gray-400')
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
  const surfaceBorder = documentStyle.getPropertyValue('--white')

  return {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          drawOnChartArea: false,
          color: surfaceBorder,
        },
      },
    },
  }
}

watch(
  () => userStore.selectedUser,
  (newUser) => {
    setDataset()
  },
)
onMounted(() => {
  setDataset()
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
</script>

<template>
  <Chart
    style="background-color: var(--surface-0);" type="line" :data="chartData" :options="chartOptions"
    class="w-full h-full border-round p-3"
  />
</template>
