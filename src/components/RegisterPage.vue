<template>
    <!-- <h2>Регистрация</h2>
    <div class="register">
        <form action="">
            <input type="text" placeholder="Имя">
            <input type="text" placeholder="Фамилия">
            <input type="email" placeholder="email@.gmail.com">
            <input type="password" placeholder="Введите пароль">
            <input type="password" placeholder="Повторите пароль">
            <button class="cta-btn" @click="reg()">Зарегистрироваться</button>
        </form>
    </div> -->
    <div class="register">
        <h2 v-if="section < 5">Регистрация</h2>
        <form id="regForm" action="" v-if="section >= 1 && section <= 4">
            <!-- One "tab" for each step in the form: -->
            <div class="tab" v-if="section == 1">Name:
                <p>
                    <input placeholder="First name..." oninput="this.className = ''">
                </p>
                <p>
                    <input placeholder="Last name..." oninput="this.className = ''">
                </p>
            </div>

            <div class="tab" v-if="section == 2">Contact Info:
                <p>
                    <input placeholder="E-mail..." oninput="this.className = ''">
                </p>
                <p>
                    <input placeholder="Phone..." oninput="this.className = ''">
                </p>
            </div>

            <div class="tab" v-if="section == 3">Birthday:
                <p>
                    <input placeholder="dd" oninput="this.className = ''">
                </p>
                <p>
                    <input placeholder="mm" oninput="this.className = ''">
                </p>
                <p>
                    <input placeholder="yyyy" oninput="this.className = ''">
                </p>
            </div>

            <div class="tab" v-if="section == 4">Login Info:
                <p>
                    <input placeholder="Username..." oninput="this.className = ''">
                </p>
                <p>
                    <input placeholder="Password..." oninput="this.className = ''">
                </p>
            </div>

            <div v-if="section <= 4">
                <button type="button" id="prevBtn" @click="prev()">Previous</button>
                <button type="button" id="nextBtn" @click="next()">Next</button>
            </div>

            <!-- Circles which indicates the steps of the form: -->
            <div v-if="section <= 4">
                <button type="button" id="1" class="step active" @click="swith(1)"></button>
                <button type="button" id="2" class="step" @click="swith(2)"></button>
                <button type="button" id="3" class="step" @click="swith(3)"></button>
                <button type="button" id="4" class="step" @click="swith(4)"></button>
            </div>
        </form>
        <p v-if="section == 5" class="end">Вы зарегистрированы!</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            section: 1,
            prevActive: 1,
        }
    },
    methods: {
        next() {
            if (this.section + 1 < 5) {
                this.section += 1;
                console.log(this.section);
                document.getElementById(this.prevActive).classList.toggle('active');
                document.getElementById(String(this.section)).classList.toggle('active');
                this.prevActive = this.section;
            } else {
                this.section += 1
            }
        },
        prev() {
            if (this.section - 1 > 0) {
                this.section -= 1;
                document.getElementById(this.prevActive).classList.toggle('active');
                document.getElementById(String(this.section)).classList.toggle('active');
                this.prevActive = this.section;
            }
            console.log(this.section)
        },
        swith(n) {
            this.section = n;
            document.getElementById(this.prevActive).classList.toggle('active');
            document.getElementById(String(n)).classList.toggle('active');
            this.prevActive = n;
            console.log(this.section)
        },
    }
}
</script>

<style scoped>
/* .wrapper {
    margin: 0 auto;
} */

h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 58px;
    margin: 20px auto;
}

.end {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 58px;
    margin: 20px auto;
}

.register {
    max-width: 372px;
    min-height: 634px;
    margin: 0 auto;
}

form {
    min-height: 400px;
    max-width: 372px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.39);
    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.14);
    border-radius: 15px;
    padding: 20px 0;
    margin: 0 auto;
    text-align: center;
}

input {
    margin: 0 auto 20px;
    padding: 5px 10px;
    max-width: 340px;
    width: 100%;
    height: 45px;
    border: 1px solid #000000;
    border-radius: 15px;
}

.cta-btn {
    margin: 0 auto;
    background: #FCBA06;
    border-radius: 15px;
    max-width: 340px;
    width: 100%;
    padding: 10px 15px;
}

.step {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbbbbb;
    border: none;
    border-radius: 50%;
    display: inline-block;
    opacity: 0.5;
}

/* Mark the active step: */
.step.active {
    background-color: #000000;
}
</style>