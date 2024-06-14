<template>
    <div class="container">
        <header>
            <button class="return-button" @click="goBack">← RETURN</button>
            <h1>出退勤管理Web(attndnc mgt)</h1>
            <div class="controls">
                <div>
                    <label for="year">年year</label>
                    <select id="year" v-model="year">
                        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                    </select>
                </div>
                <div>
                    <label for="month">月month</label>
                    <select id="month" v-model="month">
                        <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
                    </select>
                </div>
                <div>
                    <label for="country">国kuni</label>
                    <select id="country" v-model="country">
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                    </select>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: 2024,
            month: 6,
            country: '日本nihon',
            years: [2019, 2020, 2021, 2022, 2023, 2024],
            months: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3],
            countries: ['日本nihon', 'USA']
        }
    },
}
const goBack = () => {
  router.back();
};
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c1c1c;
    color: white;
}

.controls {
    display: flex;
    gap: 1rem;
}

.controls div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

select {
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 0.25rem;
}

label {
    margin-bottom: 0.5rem;
}

header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #333;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>