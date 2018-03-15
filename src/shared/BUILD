package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_library")

sass_library(
    name = "colors",
    srcs = ["_colors.scss"],
)

sass_library(
    name = "fonts",
    srcs = ["_fonts.scss"],
)

ng_module(
    name = "shared",
    srcs = glob(["*.ts"]),
    tsconfig = "//src:tsconfig.json",
    deps = ["@rxjs", "//src/shared/my-footer"],
)
