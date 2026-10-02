#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotive",
  boardId: "remotive-official",
  domain: "remotive.com",
  npmName: "zc-remotive-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
