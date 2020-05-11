const core = require("@actions/core")
const process = require("child_process")

try {
  process.exec("curl -sSL https://deploygate.com/cli/install/c1049b67 | bash")
} catch (error) {
  core.setFailed(error.message);
}