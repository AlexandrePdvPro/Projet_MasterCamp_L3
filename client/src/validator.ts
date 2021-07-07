import { defineRule} from "vee-validate";
import {email, required, min, max, } from '@vee-validate/rules';

defineRule('email', (value: string) => {
    if(email(value) && required(value)){
        return true;
    }

    return "Veuillez entrer une adresse mail valide"
});

defineRule('user', (value: string) => {
    if(required(value)){
        return true;
    }

    return "Ce champ est requis"
});

defineRule('password', (value: string) => {
    if(required(value) && min(value, {length: 6}) && max(value, {length: 18})){
        return true;
    }

    return "Le mot de passe doit être compris entre 6 et 15 caractères"
});

defineRule('confirmPassword', (value: string, [target]: any , ctx: any)=>{
    if(required(value) && value === ctx.form[target]){
        return true;
    }

    return "Le mot de passe doit être identique"
})
