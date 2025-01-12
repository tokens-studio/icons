import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPeaceHand = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M9.43254 6.31446V2.40773C9.43254 1.81438 8.95154 1.33337 8.35821 1.33337C7.76487 1.33337 7.28387 1.81438 7.28387 2.40773V5.63078'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.8973 8.56063L12.3478 3.72571C12.517 3.16173 12.1924 2.56828 11.6263 2.40652C11.0629 2.24556 10.4761 2.57389 10.3186 3.13825L9.43228 6.31429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.07957 6.16652L5.78326 7.72749C6.02641 8.26682 5.78773 8.90129 5.24936 9.14662C4.70789 9.39335 4.06898 9.15302 3.82442 8.61055L3.12073 7.04962C2.87758 6.51023 3.11626 5.87579 3.65462 5.63045C4.1961 5.38368 4.83501 5.62405 5.07957 6.16652Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.81279 8.17436C7.94926 7.79602 7.93319 7.37949 7.76786 7.01282L7.05246 5.42585C6.81206 4.89264 6.18408 4.65638 5.65186 4.89893C5.10978 5.14597 4.87922 5.79224 5.14254 6.3266L5.23296 6.5101'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.23772 11.7844L9.56579 11.1284C9.59839 11.0631 9.56406 10.9842 9.49399 10.9636L7.12686 10.2674C6.65234 10.1278 6.3453 9.66916 6.39708 9.17729C6.4558 8.61943 6.95226 8.21249 7.51079 8.26449L10.7028 8.56143C10.7028 8.56143 13.2421 8.95209 12.3631 11.4914C11.4841 14.0308 11.1911 14.9098 9.23772 14.9098C7.96806 14.9098 6.11236 14.9098 6.11236 14.9098H5.91702C4.35274 14.9098 3.08464 13.6418 3.08464 12.0775L2.98697 6.60803'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPeaceHand;
