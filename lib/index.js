const core = require("@actions/core")
const process = require("child_process")

try {
  process.execSync("apt-get update")
  process.execSync("apt-get install -y curl")
  process.exec("curl -sSL https://deploygate.com/cli/install | bash")
} catch (error) {
  core.setFailed(error.message);
}
