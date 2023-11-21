{
  "targets": [
    {
      "target_name": "test",
      "sources": [ "addon/test.cc" ]
    }
  ]
}

# {
#   "targets": [
#     {
#       "target_name": "hello",
#       "sources": [ "addons/hello.cc" ],
#       "include_dirs": [
#         "<!(node -e \"require('nan')\")"
#       ]
#     }
#   ]
# }