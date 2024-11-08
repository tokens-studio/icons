import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitlabFull = ({
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
			d='M11.372 1.696a.133.133 0 0 1 .251-.005L13.7 7.23l.932 2.487a.13.13 0 0 1-.046.154L8.078 14.61a.13.13 0 0 1-.157 0L1.415 9.872a.13.13 0 0 1-.046-.154L2.3 7.23l.11-.3 1.964-5.24a.133.133 0 0 1 .252.005l1.646 5.066a.13.13 0 0 0 .127.092h3.2a.13.13 0 0 0 .127-.092z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgGitlabFull;
