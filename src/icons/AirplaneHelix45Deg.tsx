import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneHelix45Deg = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M9.414 9.414a2 2 0 1 0-2.83-2.828 2 2 0 0 0 2.83 2.828'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M6.586 6.586s-1.868.006-2.829-.943c-.939-.94-1.91-1.863-.942-2.828.918-.918 1.872-.01 2.828.942.937.935.943 2.829.943 2.829M9.414 6.586s-.006-1.868.943-2.829c.94-.939 1.863-1.91 2.829-.942.917.918.01 1.872-.943 2.828-.935.937-2.829.943-2.829.943M6.586 9.414s.006 1.868-.943 2.829c-.94.939-1.863 1.91-2.829.942-.917-.918-.01-1.873.943-2.828.935-.937 2.829-.943 2.829-.943M9.414 9.414s1.868-.006 2.829.943c.939.94 1.91 1.863.942 2.829-.918.917-1.873.01-2.828-.943-.937-.935-.943-2.829-.943-2.829'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgAirplaneHelix45Deg;
