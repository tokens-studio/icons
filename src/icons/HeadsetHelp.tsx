import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeadsetHelp = ({
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
			strokeWidth={1.5}
			d='m2.667 7.667-.324.08a1.33 1.33 0 0 0-1.01 1.294v1.251c0 .612.417 1.145 1.01 1.294l1.16.29A.4.4 0 0 0 4 11.488V7.846a.4.4 0 0 0-.497-.389zm0 0v-.334a5.333 5.333 0 1 1 10.666 0v.334m0 0 .324.08c.593.149 1.01.682 1.01 1.294v1.251c0 .612-.417 1.145-1.01 1.294l-.324.08m0-4-.836-.209a.4.4 0 0 0-.497.389v3.642a.4.4 0 0 0 .497.388l.836-.21m0 0v.667c0 .737-.597 1.334-1.333 1.334h-2m0 0a1 1 0 0 0-1-1H7a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1Z'
		/>
	</svg>
);
export default SvgHeadsetHelp;
