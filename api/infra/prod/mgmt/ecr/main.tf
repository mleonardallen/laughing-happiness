provider "aws" {
  region = var.region
}

module "ecr" {
  source           = "git::git@github.com:mleonardallen/infra.git//mgmt/ecr?ref=v0.0.1"
  reposistory_name = "laughing-happiness-api"
}
