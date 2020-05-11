const core = require("@actions/core")
const exec = require("@actions/exec")

try {
  exec.exec("curl -sSL https://deploygate.com/cli/install/c1049b67 | bash")
} catch (error) {
  core.setFailed(error.message);
}