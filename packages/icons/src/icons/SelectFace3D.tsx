import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSelectFace3D = ({
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
			d='M14 4.90198V11.098C14 11.2432 13.9213 11.377 13.7943 11.4476L8.19428 14.5587C8.07348 14.6258 7.92655 14.6258 7.80575 14.5587L2.20575 11.4476C2.07877 11.377 2.00001 11.2432 2.00001 11.098L2 4.90198C2 4.75671 2.07876 4.62286 2.20575 4.55232L7.80575 1.4412C7.92655 1.37409 8.07348 1.37409 8.19428 1.4412L13.7943 4.55232C13.9212 4.62286 14 4.75671 14 4.90198Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.35229 4.86234L7.80574 7.89203C7.92654 7.95916 8.07347 7.95916 8.19427 7.89203L13.6667 4.85181'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.79427 7.88569L2.59426 4.99683C2.32765 4.84872 2 5.04151 2 5.3465V11.098C2 11.2433 2.07875 11.3771 2.20574 11.4477L7.40573 14.3366C7.67233 14.4847 8 14.2919 8 13.9869V8.23536C8 8.09009 7.92127 7.95629 7.79427 7.88569Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSelectFace3D;
