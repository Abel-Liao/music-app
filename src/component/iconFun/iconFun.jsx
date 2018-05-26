import React from 'react'
function IconFun(props){
    return (
        <span
            className={props.spanClass}
            onClick={props.handleClickIcon?props.handleClickIcon:null}
        >
            <i className={`iconfont ${props.iconName}`} />
        </span>
    );
}

export default IconFun