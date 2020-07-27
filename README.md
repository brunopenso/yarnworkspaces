# Yarn Workspaces

Config:
```bash
mkdir prj
cd prj
yarn set version berry
```

Create a package.json with this part included
```json
{
  ....
  "private": true,
  "workspaces": [
    "packages/*"
  ]
  ...
}
```

Initialize a package
```bash
mkdir packages
cd packages
mkdir sharedLib
cd sharedLib
yarn init -y
```

## Dependencies

To install new dependencies...