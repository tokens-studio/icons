import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReleases = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12 13.0005V7.00049'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99945 19.4995V4.49951C3.99945 3.83647 4.26284 3.20059 4.73168 2.73174C5.20052 2.2629 5.83641 1.99951 6.49945 1.99951H18.9994C19.2647 1.99951 19.519 2.10487 19.7066 2.2924C19.8941 2.47994 19.9994 2.7343 19.9994 2.99951V20.9995C19.9994 21.2647 19.8941 21.5191 19.7066 21.7066C19.519 21.8942 19.2647 21.9995 18.9994 21.9995H6.49945C5.83641 21.9995 5.20052 21.7361 4.73168 21.2673C4.26284 20.7984 3.99945 20.1626 3.99945 19.4995ZM3.99945 19.4995C3.99945 18.8365 4.26284 18.2006 4.73168 17.7317C5.20052 17.2629 5.83641 16.9995 6.49945 16.9995H19.9994'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.00003 10.0005L12 7.00049L15 10.0005'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgReleases;
