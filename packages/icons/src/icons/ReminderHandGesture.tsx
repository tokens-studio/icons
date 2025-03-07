import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReminderHandGesture = ({
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
			d='M11.6667 7.99994L13.0027 9.7814C13.3877 10.2947 13.3525 11.0094 12.9189 11.4823L10.3963 14.2343C10.1438 14.5098 9.78779 14.6666 9.41406 14.6666C8.68992 14.6666 7.50566 14.6666 6.33332 14.6666C4.76105 14.6666 3.91838 12.9499 3.67877 12.0469C3.67038 12.0153 3.66666 11.9841 3.66666 11.9514C3.66666 11.4587 3.66666 7.35934 3.66666 6.28568C3.66666 4.76187 5.66666 4.76187 5.66666 6.28568C5.66666 6.58322 5.66666 6.66664 5.66666 6.66664'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66666 6.6667C7.66666 6.6667 7.66666 6.11892 7.66666 5.52384C7.66666 4.00003 5.66666 4.00003 5.66666 5.52384C5.66666 5.67261 5.66666 6.13697 5.66666 6.28574C5.66666 6.58329 5.66666 6.6667 5.66666 6.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66666 6.66673C9.66666 6.66673 9.66666 5.74389 9.66666 5.00003C9.66666 3.47623 7.66666 3.47623 7.66666 5.00003C7.66666 5.00003 7.66666 5.37507 7.66666 5.52385C7.66666 6.11893 7.66666 6.66673 7.66666 6.66673'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66666 6.66671C9.66666 6.66671 9.66666 5.74389 9.66666 5.00004C9.66666 4.22775 9.66666 3.12649 9.66666 2.3327C9.66666 1.78041 10.1144 1.33337 10.6667 1.33337C11.2189 1.33337 11.6667 1.78109 11.6667 2.33337V8.00004V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.7083 4.33329H13.0833C13.6667 4.33329 14 4.05225 14 3.49996C14 2.94767 13.6667 2.66663 13.0833 2.66663H11.7083H9.62501H8.16668C7.70641 2.66663 7.33334 3.03972 7.33334 3.49996V3.66663C7.33334 4.03481 7.63181 4.33329 8.00001 4.33329'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgReminderHandGesture;
