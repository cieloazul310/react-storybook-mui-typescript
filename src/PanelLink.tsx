import { forwardRef, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonBase, { type ButtonBaseProps } from "@mui/material/ButtonBase";
import { alpha, type Theme } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ButtonBaseRootStyle = {
  width: 1,
  minHeight: 80,
  px: 2,
  py: 1,
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  bgcolor: "background.paper",
  zIndex: 100,
  transition: ({ transitions }: Theme) => transitions.create("background"),
  "&:hover": {
    bgcolor: ({ palette }: Theme) =>
      alpha(palette.primary.main, palette.action.hoverOpacity),
  },
} as const;

export type PanelLinkProps = Omit<
  ButtonBaseProps<
    any,
    {
      href: string;
      children: React.ReactNode;
      disableBorder?: boolean;
      disableMargin?: boolean;
    }
  >,
  "ref"
>;

const PanelLink = forwardRef<HTMLAnchorElement, PanelLinkProps>(
  (
    {
      children,
      href,
      download,
      disableBorder = false,
      disableMargin = false,
      ...props
    },
    ref,
  ) => {
    const borderStyles = {
      border: disableBorder ? 0 : 1,
      borderRadius: disableBorder ? 0 : 1,
      borderColor: "divider",
    } as const;
    const sx = {
      my: disableMargin ? 0 : 4,
      "&.MuiButtonBase-root": { ...ButtonBaseRootStyle, ...borderStyles },
    } as const;

    const host = useMemo(() => {
      try {
        const { hostname } = new URL(href);
        return (
          <Typography component="div" variant="caption" color="text.secondary">
            {hostname}
          </Typography>
        );
      } catch {
        return null;
      }
    }, [href]);

    const inside = useMemo(
      () => (
        <Box display="flex" alignItems="center">
          <Box flexShrink={0} mr={2} display="flex">
            <OpenInNewIcon />
          </Box>
          <Box flexGrow={1}>
            <Typography component="div">{children}</Typography>
            {host}
          </Box>
        </Box>
      ),
      [host, children],
    );

    return (
      <ButtonBase
        ref={ref}
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={sx}
        {...props}
      >
        {inside}
      </ButtonBase>
    );
  },
);

export default PanelLink;
