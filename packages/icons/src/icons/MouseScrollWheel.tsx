import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMouseScrollWheel = ({
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
			d='M8.00008 3.33337L8.35361 2.97982C8.15835 2.78456 7.84181 2.78456 7.64655 2.97982L8.00008 3.33337ZM8.00008 8.66671L7.64655 9.02024C7.84181 9.21551 8.15835 9.21551 8.35361 9.02024L8.00008 8.66671ZM6.31319 4.31315C6.11793 4.50841 6.11793 4.825 6.31319 5.02026C6.50845 5.21552 6.82501 5.21552 7.02028 5.02026L6.31319 4.31315ZM8.97988 5.02026C9.17515 5.21552 9.49168 5.21552 9.68695 5.02026C9.88221 4.825 9.88221 4.50841 9.68695 4.31315L8.97988 5.02026ZM7.02028 6.97984C6.82501 6.78457 6.50845 6.78457 6.31319 6.97984C6.11793 7.17511 6.11793 7.49164 6.31319 7.68691L7.02028 6.97984ZM9.68695 7.68691C9.88221 7.49164 9.88221 7.17511 9.68695 6.97984C9.49168 6.78457 9.17515 6.78457 8.97988 6.97984L9.68695 7.68691ZM2.16675 6.66671V9.33337H3.16675V6.66671H2.16675ZM13.8334 9.33337V6.66671H12.8334V9.33337H13.8334ZM7.50008 3.33337V8.66671H8.50008V3.33337H7.50008ZM7.64655 2.97982L6.31319 4.31315L7.02028 5.02026L8.35361 3.68693L7.64655 2.97982ZM7.64655 3.68693L8.97988 5.02026L9.68695 4.31315L8.35361 2.97982L7.64655 3.68693ZM8.35361 8.31317L7.02028 6.97984L6.31319 7.68691L7.64655 9.02024L8.35361 8.31317ZM8.35361 9.02024L9.68695 7.68691L8.97988 6.97984L7.64655 8.31317L8.35361 9.02024ZM13.8334 6.66671C13.8334 3.44505 11.2217 0.833374 8.00008 0.833374V1.83337C10.6695 1.83337 12.8334 3.99733 12.8334 6.66671H13.8334ZM8.00008 15.1667C11.2217 15.1667 13.8334 12.555 13.8334 9.33337H12.8334C12.8334 12.0028 10.6695 14.1667 8.00008 14.1667V15.1667ZM2.16675 9.33337C2.16675 12.555 4.77842 15.1667 8.00008 15.1667V14.1667C5.33071 14.1667 3.16675 12.0028 3.16675 9.33337H2.16675ZM3.16675 6.66671C3.16675 3.99733 5.33071 1.83337 8.00008 1.83337V0.833374C4.77842 0.833374 2.16675 3.44505 2.16675 6.66671H3.16675Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgMouseScrollWheel;
