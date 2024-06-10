<script setup>
const userStore = useUsersStore()

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        fill: false,
        borderColor: documentStyle.getPropertyValue('--green-400'),
        yAxisID: 'y',
        tension: 0.4,
        data: [65, 59, 80, 81, 56, 55, 10],
      },
      {
        label: 'Dataset 2',
        fill: false,
        borderColor: documentStyle.getPropertyValue('--red-400'),
        yAxisID: 'y1',
        tension: 0.4,
        data: [28, 48, 40, 19, 86, 27, 90],
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
  async (newUser) => {
    await userStore.setChartData(newUser)
  },
)

onMounted(async () => {
  await userStore.setChartData(userStore.selectedUser)

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
