<template>
    <div class="wrapper">

        <div class="text_wrapper">
            <text class="text">onInput--------{{txtInput}}</text>
            <text class="text">onChange-------{{txtChange}}</text>
            <text class="text">onReturnType---{{txtReturnType}}</text>
            <text class="text">selection------{{txtSelection}}</text>
        </div>
        <scroller>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = text</text>
                </div>
                <input type="text"
                       placeholder="Input Text"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = password</text>
                </div>
                <input type="password"
                       placeholder="Input Password"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = url</text>
                </div>
                <input type="url"
                       placeholder="Input url"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = email</text>
                </div>
                <input type="email"
                       placeholder="Input Email"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = tel</text>
                </div>
                <input type="tel"
                       placeholder="Input telephone"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = time</text>
                </div>
                <input type="time"
                       placeholder="Input time"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = number</text>
                </div>
                <input type="number"
                       placeholder="Input number"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">input type = date</text>
                </div>
                <input type="date"
                       placeholder="Input date"
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @input="onInput"
                       max="2018-07-12"
                       min="2015-01-20"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=default</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="default"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=go</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="go"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=next</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="next"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=search</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="search"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=send</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="send"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">Input return-key-type=done</text>
                </div>
                <input type="text"
                       placeholder="Please input."
                       class="input"
                       :autoFocus="true"
                       @change="onChange"
                       @return="onReturn"
                       @input="onInput"
                       return-key-type="done"/>
            </div>
            <div class="input_wrapper">
                <div style="background-color: #fe751a">
                    <text class="title">function focus() & blur()</text>
                </div>
                <text class="text" value="Focus" type="primary" @click="focus"></text>
                <text class="text" value="Blur" type="primary" @click="blur"></text>
                <input type="text" placeholder="Input1" class="input" value="" ref="input1"/>
                <input type="text" ref="inputselection" placeholder="please input"
                       value="123456789"
                       class="input"
                       @change="onChange" @return="onReturn" @input="onInput"/>
            </div>
        </scroller>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                txtInput: 'Hello',
                txtChange: '',
                txtReturnType: '',
                txtSelection: '',
                autoFocus: true
            }
        },
        methods: {
            ready(){
                let self = this;
                setTimeout(() => {
                    self.autofocus = true;
                }, 1000);
            },
            onChange(event){
                this.txtChange = event.value;
                console.log('onChange', event.value);
            },
            onInput(event){
                this.txtInput = event.value;
                console.log('onInput', event.value);
            },
            onReturn(event){
                this.txtReturnType = event.returnKeyType;
                console.log('onReturn', event.type);
            },
            focus(){
                this.$refs['input1'].focus();
            },
            blur(){
                this.$refs['input1'].blur();
            },
            setRange: function () {
                console.log(this.$refs["inputselection"]);
                this.$refs["inputselection"].setSelectionRange(2, 6);
            },
            getSelectionRange: function () {
                console.log(this.$refs["inputselection"]);
                var self = this;
                this.$refs["inputselection"].getSelectionRange(function (e) {
                    self.txtSelection = e.selectionStart + '-' + e.selectionEnd;
                });
            }
        }
    }
</script>
<style>
    .wrapper {
        flex: 1;
        width: 750px;
        /*background-color: #afddff;*/
    }

    .text_wrapper {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
    }

    .text {
        font-size: 40px;
    }

    .title {
        height: 50px;
        color: #ffffff;
        padding-left: 20px;
        font-size: 30px;
        line-height: 50px;
    }

    .input_wrapper {
        margin-top: 15px;
        background-color: lightcyan;
    }

    .input {
        font-size: 30px;
        height: 60px;
        margin-left: 20px;
        margin-right: 20px;
        border-color: #333333;
        border-width: 1px;
        border-radius: 5px;
        color: #fe751a;
    }
</style>