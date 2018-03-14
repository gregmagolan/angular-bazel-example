# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(name = "angular_bazel_example")

####################################
# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
http_archive(
    name = "com_github_bazelbuild_buildtools",
    sha256 = "4d8d6244320dd751590f9100cf39fd7a4b75cd901e1f3ffdfd6f048328883695",
    # Note, this commit matches the version of buildifier in angular/ngcontainer
    url = "https://github.com/bazelbuild/buildtools/archive/b3b620e8bcff18ed3378cd3f35ebeb7016d71f71.zip",
)

####################################
# Fetch and install the NodeJS rules
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "e9bc013417272b17f302dc169ad597f05561bb277451f010043f4da493417607",
    strip_prefix = "rules_nodejs-0.4.1",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/0.4.1.zip",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])

####################################
# Fetch and install the Sass rules
git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.3",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()

####################################
# Fetch and install the TypeScript rules
http_archive(
    name = "build_bazel_rules_typescript",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.11.1.zip",
    strip_prefix = "rules_typescript-0.11.1",
    sha256 = "7406bea7954e1c906f075115dfa176551a881119f6820b126ea1eacb09f34a1a",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Some of the TypeScript is written in Go.
# Bazel doesn't support transitive WORKSPACE deps, so we must repeat them here.
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "4b14d8dd31c6dbaf3ff871adcd03f28c3274e42abc855cb8fb4d01233c0154dc",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.10.1/rules_go-0.10.1.tar.gz",
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

####################################
# Tell Bazel about some workspaces that were installed from npm.
local_repository(
    name = "angular",
    path = "node_modules/@angular/bazel",
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

local_repository(
    name = "external_rule",
    path = "external_rule",
)
