import React from "react";
import { colors } from "../../../theme/globals";

const Label = ({ leftIcon, leftLabel, title, rightIcon }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', background: colors.dani, width: 125, padding: 5, borderRadius: 16 }}>
                {leftIcon && <img src={leftIcon} width={26} height={20} />}
                {leftLabel && (
                    <span style={{ background: '#fff', width: 16, height: 16, padding: 3, borderRadius: 4, marginLeft: 5 }}>
                        <span style={{ color: colors.black, fontSize: 8 }}>
                            {leftLabel}
                        </span>
                    </span>
                )}
                <span style={{ marginLeft: 8, color: colors.black }}>{title}</span>
            </span>
            <span style={{ background: colors.dani, width: 16, height: 16, padding: 3, borderRadius: 4, marginLeft: 5 }}>
                <img src={rightIcon} style={{ marginBottom: 2, marginLeft: 2 }}/>
            </span>
        </div>
    )
}

export default Label;
