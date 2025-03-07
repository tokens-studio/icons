import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNeighbourhood = ({
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
			d='M7.33337 14H2.66671C1.93033 14 1.33337 13.4031 1.33337 12.6667V9.63997C1.33337 9.17371 1.57691 8.74131 1.97564 8.49971L4.30897 7.08551C4.73373 6.82811 5.26635 6.82811 5.69111 7.08551L8.02444 8.49971C8.42317 8.74131 8.66671 9.17371 8.66671 9.63997V12.6667C8.66671 13.4031 8.06977 14 7.33337 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33337 6.66665V4.30655C4.33337 3.84031 4.57691 3.40794 4.97564 3.16629L7.30897 1.75215C7.73371 1.49473 8.26637 1.49473 8.69111 1.75215L11.0244 3.16629C11.4232 3.40795 11.6667 3.84031 11.6667 4.30655V6.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 14H13.3333C14.0697 14 14.6666 13.4031 14.6666 12.6667V9.63998C14.6666 9.17371 14.4231 8.74131 14.0244 8.49971L11.6876 7.08344C11.2646 6.82711 10.7346 6.82598 10.3105 7.08038L9.88892 7.33338'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 14V11.7334C6 11.5124 5.82091 11.3334 5.6 11.3334H4.4C4.17909 11.3334 4 11.5124 4 11.7334V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 14V11.7334C12 11.5124 11.8209 11.3334 11.6 11.3334H10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgNeighbourhood;
