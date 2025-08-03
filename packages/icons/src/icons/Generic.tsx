import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGeneric = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M8.3001 9.99834C8.17119 10.0054 8.04284 9.97663 7.92926 9.91527C7.81567 9.85391 7.72126 9.76233 7.65647 9.65066C7.59169 9.53899 7.55904 9.41158 7.56215 9.28252C7.56526 9.15345 7.60401 9.02776 7.6741 8.91934L11.4001 2.99834C11.4586 2.89291 11.5434 2.80439 11.6463 2.74137C11.7491 2.67835 11.8664 2.64296 11.987 2.63863C12.1075 2.63431 12.2271 2.66119 12.3341 2.71668C12.4412 2.77217 12.5321 2.85438 12.5981 2.95534L16.3001 8.89834C16.3731 9.00313 16.416 9.12589 16.4242 9.25332C16.4324 9.38075 16.4056 9.508 16.3467 9.62129C16.2878 9.73459 16.199 9.82961 16.09 9.89607C15.9809 9.96253 15.8558 9.99789 15.7281 9.99834H8.3001Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 13.9995H4C3.44772 13.9995 3 14.4472 3 14.9995V19.9995C3 20.5518 3.44772 20.9995 4 20.9995H9C9.55229 20.9995 10 20.5518 10 19.9995V14.9995C10 14.4472 9.55229 13.9995 9 13.9995Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M17.5005 20.9995C19.4335 20.9995 21.0005 19.4325 21.0005 17.4995C21.0005 15.5665 19.4335 13.9995 17.5005 13.9995C15.5676 13.9995 14.0005 15.5665 14.0005 17.4995C14.0005 19.4325 15.5676 20.9995 17.5005 20.9995Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGeneric;
