import MaskedInput from "react-text-mask";
import React from "react";

type TextMaskCustomProps = {
    inputRef: (ref: HTMLInputElement | null) => void;
};

export const TextMaskCustom = (props: TextMaskCustomProps) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[ "+", "3", "7", "5", "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/,]}
            placeholderChar={"\u2000"}
            guide={true}
            showMask
        />
    );
};