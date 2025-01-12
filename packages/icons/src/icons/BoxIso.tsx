import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxIso = ({
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
			d='M1.79688 4.79025L7.79688 7.45694L8.20301 6.5431L2.20301 3.87643L1.79688 4.79025ZM8.49994 14.3333V7.00001H7.49994V14.3333H8.49994ZM8.20301 7.45694L14.203 4.79025L13.7969 3.87643L7.79688 6.5431L8.20301 7.45694Z'
			fill='currentColor'
		/>
		<path
			d='M2 11.4067V4.5933C2 4.43522 2.09309 4.29198 2.23755 4.22778L7.83753 1.73888C7.941 1.69292 8.059 1.69292 8.16247 1.73888L13.7625 4.22778C13.9069 4.29198 14 4.43522 14 4.5933V11.4067C14 11.5648 13.9069 11.7081 13.7625 11.7723L8.16247 14.2611C8.059 14.3071 7.941 14.3071 7.83753 14.2611L2.23755 11.7723C2.09309 11.7081 2 11.5648 2 11.4067Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5 3L10.7625 5.56109C10.9069 5.62529 11 5.76854 11 5.92661V8.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBoxIso;
