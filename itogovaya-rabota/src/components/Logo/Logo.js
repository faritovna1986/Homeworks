import './Logo.scss';

export function Logo({ size = 'small'}) {
    return (
        <img className={`logo logo_${size}`} src={'./img/logo.png'}></img>
    )
}