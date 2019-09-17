/**
 * Simple CSS multiline truncation
 * 
 * Example:
 * 
 * import linesTruncate from 'react-css-truncate';
 * 
 * <div style={linesTruncate(2)}>
 * <div style={{ ...linesTruncate(1), width: '50px' }}>
 * 
 */

const linesTruncate = (linesCount) => {
  const lines = parseInt(linesCount);

  if (isNaN(lines) || lines < 1) {
    return {};
  }

  if (lines === 1) {
    return {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    };
  }

  return {
    WebkitLineClamp: `${lines} !important`,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
    maxHeight: '100%',
    overflow: 'hidden',
  };
}

module.export = linesTruncate;
