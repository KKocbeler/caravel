import React from "react";
import styles from './Button.module.scss';

interface PropsTypes {
    text: string;
    type: "button" | "submit" | "reset";
    size: "sm" | "md" | "lg";
    outline?: boolean;
    arialLabel: string
}

const Button: React.FC<PropsTypes> = ({text, type, size, outline, arialLabel}) => {
    const sizeClass = size === "sm" ? "small" : size === "md" ? "medium" : "large";
    const outlineClass = outline ? "outline" : "";
    const editedText = text.charAt(0).toUpperCase() + text.slice(1)

    return (
        <button 
            className={`${styles.button} ${styles[sizeClass]} ${outline ? styles[outlineClass] : ''}`}
            type={type} 
            aria-label={arialLabel}
        >
            {editedText}
        </button>
    )
}

export default Button