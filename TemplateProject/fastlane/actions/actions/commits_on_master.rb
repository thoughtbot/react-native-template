module Fastlane
  module Actions
    class CommitsOnMasterAction < Action
      def self.run(_params)
        `git rev-list --count master | tr -d ' '`.to_i
      end
    end
  end
end
