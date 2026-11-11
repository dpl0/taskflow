{
  description = "TaskFlow development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_24 # v24.x
            pnpm # latest stable
            moon # moonrepo build tool
            python311 # backend interpreter
            python311Packages.pip # pip for python 3.11
          ];

          shellHook = ''
            # The Nix Python is immutable (PEP 668), so installs must go into a
            # project-local virtualenv instead of the interpreter itself.
            if [ ! -d .venv ]; then
              python -m venv .venv
            fi
            source .venv/bin/activate
          '';
        };
      });
}
