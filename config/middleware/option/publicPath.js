/**
 *处理 publicPath
 */
module.exports = context => option => {
  const { env, value, isPlain } = context;
  const { publicPath, envPublicPath } = value;
  if (publicPath && env === "production") {
    option.output.publicPath = publicPath;
  } else {
    option.output.publicPath = envPublicPath || publicPath;
  }
  return option;
};